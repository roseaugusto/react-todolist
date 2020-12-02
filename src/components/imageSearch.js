import React, {useState} from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className="md:flex md:justify-center mb-6">
            <form class="m-5 flex" onSubmit={onSubmit}>
                <input name="keyword" onChange={e => setText(e.target.value)} class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Write something here..."/>
                <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch
