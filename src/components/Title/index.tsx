type Props = {
  title: string;
  path?: string;
  isPath?: boolean;
};

export function Title({ title, path, isPath }: Props) {
  return (
    <div className="content-title d-flex justify-content-between">
      <h4>{title}</h4>
      {!isPath ? <a href={path}>View All</a> : ""}
    </div>
  );
}
