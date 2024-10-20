
const Review = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <h4>Comentarios</h4>
                        <hr />
                        <div className="coment-bottom bg-white p-2 px-4">
                            <div className="card-body p-4">
                                <div className="d-flex flex-start w-100">
                                    <img className="rounded-circle shadow-1-strong me-3" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width={65} height={65} />
                                    <div className="w-100">
                                        <h5>Add a comment</h5>
                                        <div data-mdb-input-init className="form-outline">
                                            <textarea className="form-control" id="textAreaExample" rows={4} defaultValue={""} />
                                            <label className="form-label" htmlFor="textAreaExample">What is your view?</label>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Danger</button>
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">
                                                Send <i className="fas fa-long-arrow-alt-right ms-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Corey oates</h5><span className="dot mb-1" /><span className="mb-1 ml-2">4 hours ago</span>
                                </div>
                                <div className="comment-text-sm">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                                <div className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons">
                                        <i className="fa fa-sort-up fa-2x mt-3 hit-voting" />
                                        <i className="fa fa-sort-down fa-2x mb-3 hit-voting" /><span className="ml-2">10</span>
                                        <span className="dot ml-2" />
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Samoya Johns</h5><span className="dot mb-1" />
                                    <span className="mb-1 ml-2">5 hours ago</span>
                                </div>
                                <div className="comment-text-sm">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
                                </div>
                                <div className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting" /><i className="fa fa-sort-down fa-2x mb-3 hit-voting" /><span className="ml-2">15</span><span className="dot ml-2" />
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Makhaya andrew</h5><span className="dot mb-1" /><span className="mb-1 ml-2">10 hours ago</span></div>
                                <div className="comment-text-sm">
                                    <span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span>
                                </div>
                                <div className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting" />
                                        <i className="fa fa-sort-down fa-2x mb-3 hit-voting" /><span className="ml-2">25</span><span className="dot ml-2" />
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review
