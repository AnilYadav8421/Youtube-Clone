import React from 'react';
import './PlayVideo.css';
import Video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={Video1} controls autoPlay muted></video>
            <h3>Best video on youtube</h3>
            <div className="play-video-info">
                <p>1m view &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />12</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>QuickCode</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>Quick and Easy way to learn Coding from our Channel so Make sure you are subscribed</p>
                <p>Quick and Easy way to learn Coding from our Channel so Make sure you are subscribed</p>
                <hr />
                <h4>144 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Amit Rana <span>1 day ago</span></h3>
                        <p>Textual Criticism, the production of scientifically reliable editions of historical texts
                            Commentary! The Musical, the musical commentary accompanying Dr. Horrible's Sing-Along Blog</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>344</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo