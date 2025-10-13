export default function Input({change, keyDown, value, holderText}) {
    const style = `w-xs border-2 border-violet-500 focus:outline-violet-500 text-lg`

    return (
        <input 
            type="text"
            className={style}
            value={value}
            onChange={change}
            onKeyDown={keyDown}
            placeholder={holderText}
            autoFocus
        />
    );
}