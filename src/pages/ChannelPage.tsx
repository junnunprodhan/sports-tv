import { useLocation } from "react-router-dom";
import LiveStream from "../components/LiveStream";
import { Container } from "react-bootstrap";

export default function ChannelPage() {
  const { state } = useLocation();
  const { channel } = state;

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">{channel.name}</h2>
      <LiveStream link={channel.link} />
    </Container>
  );
}
