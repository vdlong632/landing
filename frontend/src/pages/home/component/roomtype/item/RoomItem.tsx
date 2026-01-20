import { Room } from "../../../../../types/room";


interface RoomProps {
  room: Room;
}

const RoomItem = ({ room }: RoomProps) => {
  return (
    <div className="roomitem">
      <img src={room.img} alt={room.title} />
      <p>{room.title}</p>

      {room.subtitle && <small>{room.subtitle}</small>}
    </div>
  );
};

export default RoomItem;
