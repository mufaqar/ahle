import { VideoByTypes } from '@/config/queries';
import { getIDFromURL } from '@/utils';
import { useQuery } from '@apollo/client';

const { default: YouTube } = require('react-youtube');

export const YtVideo = ({ opts, onPlayerReady }) => {
  const { loading, error, data } = useQuery(VideoByTypes, {
    variables: { id: 'all-pakistan-conference' },
  });

  const videosList = data?.videoType?.videos?.nodes;

  return (
    <>
      {videosList?.map((d, i) => {
        return (
          <YouTube
            videoId={getIDFromURL(d?.videoInfo?.videoUrl)}
            opts={opts}
            key={i}
            className={`videocontainer`}
            iframeClassName={`w-full h-full aspect-square`}
            onReady={onPlayerReady}
          />
        );
      })}
    </>
  );
};
