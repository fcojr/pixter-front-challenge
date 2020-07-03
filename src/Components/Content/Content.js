import React, { useState, useEffect } from 'react'
import '../../Style/General.scss'
import './Content.scss'
import Book from './Book/Book'

function Content() {

    const [data, setData] = useState([])
  
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER`)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.items)
            }
        )
    }, [])

    return (
        <div className='container'>
            <div className='content' id="content">
                <h2>Books</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                <div className='books'>
                    {
                        data.map(item => {
                            let img = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail)
                            return (<Book
                                key={item.id}
                                title={item.volumeInfo.title}
                                thumbnail={img}
                                description={item.volumeInfo.description}
                                publishedDate={item.volumeInfo.publishedDate}
                            />)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Content
