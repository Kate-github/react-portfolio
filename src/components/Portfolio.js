export default function Portfolio() {
    const data = [
        {
            title: 'Project 1',
            description: 'In tellus integer feugiat scelerisque varius morbi enim.',
            viewLink: 'http://someUrl.com',
            sourceLink: 'http://github.com/foo'
        },
        {
            title: 'Project 2',
            description: 'In tellus integer feugiat scelerisque varius morbi enim.',
            viewLink: 'http://someUrl.com',
            sourceLink: 'http://github.com/foo'
        },
        {
            title: 'Project 3',
            description: 'In tellus integer feugiat scelerisque varius morbi enim.',
            viewLink: 'http://someUrl.com',
            sourceLink: 'http://github.com/foo'
        },
        {
            title: 'Project 4',
            description: 'In tellus integer feugiat scelerisque varius morbi enim.',
            viewLink: 'http://someUrl.com',
            sourceLink: 'http://github.com/foo'
        },
        {
            title: 'Project 5',
            description: 'In tellus integer feugiat scelerisque varius morbi enim.',
            viewLink: 'http://someUrl.com',
            sourceLink: 'http://github.com/foo'
        }
    ]
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item) => {
                return (
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div className="card-body">
                                <h5>{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href={item.viewLink} type="button" className="btn btn-sm btn-outline-secondary">View</a>
                                        <a href={item.sourceLink} type="button" className="btn btn-sm btn-outline-secondary">Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}