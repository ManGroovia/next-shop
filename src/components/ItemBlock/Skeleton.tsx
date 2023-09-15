import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    speed={2}
    width={230}
    height={390}
    viewBox="0 0 230 390"
    backgroundColor="#ffff"
    foregroundColor="#f6f4f4"
   
  >
    <rect x="0" y="0" rx="10" ry="10" width="230" height="390" />
  </ContentLoader>
)

export default Skeleton