import styles from './youtube.module.css';
import Link from 'next/link';

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-responsive">
      사용방법
      <br />
      <br />
      <iframe
        width="840"
        height="480"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
      <div className={styles.event}>
        <a href="/more-info">사용방법 더보기</a>
      </div>
    </div>
  );
};

export default YoutubeVideo;
