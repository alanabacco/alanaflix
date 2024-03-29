import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import { SliderItem } from "./components/Slider/styles";
import VideoCard from "./components/VideoCard";
import Slider from "./components/Slider";

function Carousel({ ignoreFirstVideo, category, categoryVideos }) {
  const categoryTitle = category?.titulo;
  const categoryColor = category?.cor;
  const categoryExtraLink = category?.link_extra;
  const videos = categoryVideos;

  // console.log("category", category);
  // console.log("categoryVideos", categoryVideos);

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos?.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
