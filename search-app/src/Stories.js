function Stories({stories}) {
    return (
        <div>
            {stories.map(function(items)
            {
                return(
                    <>
                    <li>
                        <span>
                            <a href={items.url}>{items.title}</a>
                        </span>
                        <span>Author:{items.author}</span>
                        <span>Comment:{items.num_Comment}</span>
                        <span>Point:{items.point}</span>
                        <span>Id:{items.object_id}</span>
                        
                    </li>
                    <hr></hr>
                    </>
                )
            }
            )}
        </div>
    );
}

export default Stories;