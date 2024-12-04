import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const ChatsAvatar = ({
  imgname,
  message,
  name,
}: {
  imgname: string;
  message: string;
  name: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <Avatar>
          <AvatarImage src={`image/${imgname}`} alt={imgname} />
          <AvatarFallback>🥺</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground mt-0.5">{name}</p>
      </div>

      <div className="bg-muted rounded-lg p-3">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatsAvatar;
