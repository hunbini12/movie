import { Row } from "antd";
import React from "react";
import { IMAGE_BASE_URL } from "../Config";
import AntCard from "../commons/AntCard";

const ImageList = ({ targets }) => {
  return (
    <Row gutter={[10, 10]}>
      {targets.map((cast, index) => {
        return (
          <React.Fragment key={index}>
            {cast.profile_path && (
              <AntCard
                path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                castName={cast.name}
              />
            )}
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default ImageList;
