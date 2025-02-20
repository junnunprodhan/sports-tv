import { useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Channel {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export default function ChannelList() {
  const [channels] = useState<Channel[]>([
    {
      id: "1",
      name: "TSports Live",
      logo: "https://image.tsports.com/images/feature_banner/1719127157-LIVE-800.jpg",
      link: "https://live.tsports.com/?bitrate=1500000&channel=tsports_live_2_1080&res=1080",
    },
    {
      id: "2",
      name: "ICC Champions Trophy Bangla",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://fdev.short.gy/Championstrophy/BANGLAxRANAPK.m3u8",
    },
    {
      id: "3",
      name: "Star Sports 1 HD",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Sports%201%40.jpeg",
      link: "http://41.205.93.154/STARSPORTS1/index.m3u8",
    },
    {
      id: "4",
      name: "Deepto TV",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg",
      link: "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8",
    },
    {
      id: "5",
      name: "Deepto TV",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg",
      link: "stream.crichd.vip/update/willowcricket.php",
    },

    {
      id: "6",
      name: "ICC Champions Trophy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://fdev.short.gy/ChampionsTrophy/ENGLISHxRANAPK.m3u8",
    },
    {
      id: "7",
      name: "ICC Champions Trophy Bangla",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://fdev.short.gy/Championstrophy/BANGLAxRANAPK.m3u8",
    },
    {
      id: "8",
      name: "ICC Champions Trophy T Sports",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://cdn.hoichoi24.com/LIVE/video.m3u8",
    },
    {
      id: "9",
      name: "ICC Champions Trophy Star Sports 1 HD",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/star1in.m3u8",
    },
    {
      id: "10",
      name: "ICC Champions Trophy Star Sports 1 Hindi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/starhindi.m3u8",
    },
    {
      id: "11",
      name: "T Sports",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/T%20Sports.png",
      link: "https://iptvcable.netlify.app/Altogether-007/Tsports.m3u8",
    },
    {
      id: "12",
      name: "Deepto TV",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg",
      link: "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8",
    },
    {
      id: "13",
      name: "Bangla TV Europe",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Bangla%20TV.png",
      link: "https://byphdgllyk.gpcdn.net/hls/banglatveurope/index.m3u8",
    },
    {
      id: "14",
      name: "Kids Creation",
      logo: "https://kidscreation.tv/wp-content/uploads/2022/11/KidsCreation-Logo-1.png",
      link: "https://vods1.aynaott.com/kidscreation_test/tracks-v1a1/mono.m3u8",
    },
    {
      id: "15",
      name: "Somoy TV",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Somoy%20TV.jpeg",
      link: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/somoyt000011226615544544.stream/playlist.m3u8",
    },
    {
      id: "16",
      name: "ICC Champions Trophy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://fdev.short.gy/ChampionsTrophy/ENGLISHxRANAPK.m3u8",
    },
    {
      id: "17",
      name: "ICC Champions Trophy Bangla",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://fdev.short.gy/Championstrophy/BANGLAxRANAPK.m3u8",
    },
    {
      id: "18",
      name: "ICC Champions Trophy T Sports",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://cdn.hoichoi24.com/LIVE/video.m3u8",
    },
    {
      id: "19",
      name: "ICC Champions Trophy Star Sports 1 HD",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/star1in.m3u8",
    },
    {
      id: "20",
      name: "ICC Champions Trophy Star Sports 1 Hindi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/starhindi.m3u8",
    },
    {
      id: "21",
      name: "ICC Champions Trophy Sky Sports Cricket",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/skyscric.m3u8",
    },
    {
      id: "22",
      name: "ICC Champions Trophy PTV Sports",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/ptvpk.m3u8",
    },
    {
      id: "23",
      name: "Willow Cricket HD",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB8TDo84j8DhnC7pBQgBFAsvD3C7b0MWnpu-h3-gbVAr_h1YDNE-MF6g&s=10",
      link: "https://hocdn.news/live/willowusa.m3u8",
    },
    {
      id: "24",
      name: "T Sports",
      logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/T%20Sports.png",
      link: "https://iptvcable.netlify.app/Altogether-007/Tsports.m3u8",
    },
  ]);

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        {channels.map((channel) => (
          <Col
            onClick={() =>
              navigate(`/channel/${channel.id}`, { state: { channel } })
            }
            md={3}
            sm={6}
            xs={12}
            key={channel.id}
            className="mb-4 cursor-pointer"
          >
            <Card
              style={{ height: "100%", minHeight: "350px" }}
              className="d-flex flex-column"
            >
              <Card.Img
                variant="top"
                src={channel.logo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="text-center">{channel.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
