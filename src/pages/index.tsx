import { FavoriteFolderCard } from "@/components/FavoriteFolders/FavoriteFolderCard";
import { QuickAccessCard } from "@/components/QuickAccess/QuickAccessCard";
import { RecentFiles } from "@/components/RecentFiles";
import { Title } from "@/components/Title";
import {
  faDownload,
  faFolder,
  faImage,
  faMusic,
  faPlusCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* <Title title="Favorite Folders" path="/favorite-folders" />
      <div className="row">
        <div className="col-md-3">
          <FavoriteFolderCard />
        </div>
        <div className="col-md-3">
          <FavoriteFolderCard />
        </div>
        <div className="col-md-3">
          <FavoriteFolderCard />
        </div>
        <div className="col-md-3">
          <FavoriteFolderCard />
        </div>
      </div>
      <Title title="Quick Access" path="/quick-access" />
      <div className="row">
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faImage} title="Images" />
        </div>
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faVideo} title="Videos" />
        </div>
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faMusic} title="Musics" />
        </div>
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faFolder} title="Folders" />
        </div>
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faDownload} title="Download" />
        </div>
        <div className="col-md-2 text-center">
          <QuickAccessCard icon={faPlusCircle} title="Add" />
        </div>
      </div>
      <Title title="Recent Files" path="/recent-files" />
      <RecentFiles /> */}
    </>
  );
}
