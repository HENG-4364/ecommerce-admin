type Props = {
  title: string;
  path?: string;
  isPath?: boolean;
};

export function Title({ title, path, isPath }: Props) {
  return (
    <div className="content-title d-flex justify-content-between mb-5 mt-3">
      <h4 className="m-0">{title}</h4>
      {!isPath ? <a href={path}>View All</a> : ""}
    </div>
  );
}
