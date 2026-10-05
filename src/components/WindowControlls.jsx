import useWindowStore from "#store/windows";

const WindowControlls = ({target}) => {
  const { closeWindow, toggleMaximize, toggleMinimize } = useWindowStore();
  return (
    <div id="window-controls">
        <div className="close" onClick={() => closeWindow (target)} />
        <div className="minimize cursor-pointer" onClick={() => toggleMinimize(target)} />
        <div className="maximize" onClick={() => toggleMaximize(target)} />
    </div>
  )
}

export default WindowControlls;