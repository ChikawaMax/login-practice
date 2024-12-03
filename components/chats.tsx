import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Chats = ({ imgname, message }: { imgname: string; message: string }) => {
  return (
    <div className="flex items-start gap-3">
      <Avatar>
        <AvatarImage src={`image/${imgname}`} alt={imgname} />
        <AvatarFallback>🥺</AvatarFallback>
      </Avatar>
      <div className="bg-muted rounded-lg p-3">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Chats;
