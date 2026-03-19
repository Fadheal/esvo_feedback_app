function Form() {
  return (
    <div className="flex w-full justify-center gap-4">
        <label className="">
            <input className="peer hidden" type="radio" name="reaction" value='reaction0' />
            <img className="max-h-15 min-w-15 bg-linear-to-b from-gray-100 to-gray-50 border border-solid border-gray-200 rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120" src="/disappointed-face.webp"></img>
        </label>
        <label>
            <input className="peer hidden" type="radio" name="reaction" value='reaction1' />
            <img className="max-h-15 min-w-15 bg-linear-to-b from-gray-100 to-gray-50 border border-solid border-gray-200 rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120" src="/frowning-face.webp"></img>
        </label>
        <label>
            <input className="peer hidden" type="radio" name="reaction" value='reaction2' defaultChecked />
            <img className="max-h-15 min-w-15 bg-linear-to-b from-gray-100 to-gray-50 border border-solid border-gray-200 rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120" src="/neutral-face.webp"></img>
        </label>
        <label>
            <input className="peer hidden" type="radio" name="reaction" value='reaction3' />
            <img className="max-h-15 min-w-15 bg-linear-to-b from-gray-100 to-gray-50 border border-solid border-gray-200 rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120" src="/slightly-smiling-face.webp"></img>
        </label>
        <label>
            <input className="peer hidden" type="radio" name="reaction" value='reaction4' />
            <img className="max-h-15 min-w-15 bg-linear-to-b from-gray-100 to-gray-50 border border-solid border-gray-200 rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120" src="/smiling-face-with-hearts.webp"></img>
        </label>
    </div>
  )
}

export default Form