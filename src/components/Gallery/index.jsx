import "./assets/main.css"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { DATA_GALLERY, DATA_NAME } from "./../../common/pages/High_Noon_Yasuo/DataPagesGallery"

const Gallery = () => {

    document.title = "Gallery . PXH2910"

    const PhotoItem = ({ image, thumb, group, name }) => (
        <LightgalleryItem group={group} src={`${window.location.origin}/${image}`} thumb={`${window.location.origin}/${thumb}`}>
            <img
                src={`${window.location.origin}/${image}`}
                style={{ width: "100%" }}
                alt={`PXH20910_${name}`}
            />
        </LightgalleryItem>
    );

    const PhotoItems = (nameId) => {
        return (
            <LightgalleryProvider>
                {DATA_GALLERY[nameId].map((item, index) => (
                    <PhotoItem key={index} name={nameId} image={item[0]} thumb={item[0]} group="groupPXH2910" />
                ))}
            </LightgalleryProvider>)
    }

    return (
        <div className="Gallery">
            {DATA_NAME.map((item, index) => (
                <div className="PXH2910" key={`${item}${index}`}>
                    {PhotoItems(item)}
                </div>
            ))}
        </div>
    )
}


export default Gallery