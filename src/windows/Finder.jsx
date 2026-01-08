import { Search } from 'lucide-react'
import { WindowControlls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { locations } from '#constants'
import useLocationStore from '#store/location.js'
import useWindowStore from '#store/windows.js'
import clsx from 'clsx'

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() =>
                        setActiveLocation(item)} className={clsx(item.id === activeLocation?.id ? "active" : "not-active")}>
                        <img src={item.icon} className='w-4' alt={item.name} />
                        <p className='text-sm font-medium truncate'>{item.name}</p>
                    </li>
                ))};
            </ul>
        </div>
    );
    const openItem = (item) => {
        if (item.fileType === 'pdf')
            return openWindow("resume")
        if (item.kind === 'folder')
            return setActiveLocation(item);
        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, '_blank');
        openWindow(`${item.fileType}${item.kind}`, item);
    }

    return (
        <>
            <div id="window-header">
                <WindowControlls target="finder" />
                <Search className='icon' />
            </div>

            <div className='bg-white dark:bg-gray-900 flex h-full transition-colors'>
                <div className='sidebar'>
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}
                </div>
                <ul className='content'>
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow