import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import GalleryImg1 from "/public/images/gallery/1.png";
import GalleryImg2 from "/public/images/gallery/2.png";
import GalleryImg3 from "/public/images/gallery/3.png";
import GalleryImg4 from "/public/images/gallery/4.png";
import GalleryImg5 from "/public/images/gallery/5.png";
import GalleryImg6 from "/public/images/gallery/6.png";
import GalleryImg7 from "/public/images/gallery/7.png";
import GalleryImg8 from "/public/images/gallery/8.png";
import GalleryImg9 from "/public/images/gallery/9.png";
import GalleryImg10 from "/public/images/gallery/10.png";
import GalleryImg11 from "/public/images/gallery/11.png";
import GalleryImg12 from "/public/images/gallery/12.png";
import GalleryImg13 from "/public/images/gallery/13.png";
import GalleryImg14 from "/public/images/gallery/14.png";
import GalleryImg15 from "/public/images/gallery/15.png";
import GalleryImg16 from "/public/images/gallery/16.png";
import GalleryImg17 from "/public/images/gallery/17.png";
import GalleryImg18 from "/public/images/gallery/18.png";
import GalleryImg19 from "/public/images/gallery/19.png";
import GalleryImg20 from "/public/images/gallery/20.png";
import GalleryImg21 from "/public/images/gallery/21.png";
import GalleryImg22 from "/public/images/gallery/22.png";
import GalleryImg23 from "/public/images/gallery/23.png";
import GalleryImg24 from "/public/images/gallery/24.png";
import GalleryImg25 from "/public/images/gallery/25.png";
import GalleryImg26 from "/public/images/gallery/26.png";
import GalleryImg27 from "/public/images/gallery/27.png";
import GalleryImg28 from "/public/images/gallery/28.png";
import GalleryImg29 from "/public/images/gallery/29.png";
import GalleryImg30 from "/public/images/gallery/30.png";
import GalleryImg31 from "/public/images/gallery/31.png";
import GalleryImg32 from "/public/images/gallery/32.png";
import GalleryImg33 from "/public/images/gallery/33.png";
import GalleryImg34 from "/public/images/gallery/34.png";
import GalleryImg35 from "/public/images/gallery/35.png";
import GalleryImg36 from "/public/images/gallery/36.png";
import GalleryImg37 from "/public/images/gallery/37.png";
import GalleryImg38 from "/public/images/gallery/38.png";
import GalleryImg39 from "/public/images/gallery/39.png";
import GalleryImg40 from "/public/images/gallery/40.png";
import GalleryImg41 from "/public/images/gallery/41.png";
import GalleryImg42 from "/public/images/gallery/42.png";
import GalleryImg43 from "/public/images/gallery/43.png";
import GalleryImg44 from "/public/images/gallery/44.png";
import GalleryImg45 from "/public/images/gallery/45.png";
import GalleryImg46 from "/public/images/gallery/46.png";
import GalleryImg47 from "/public/images/gallery/47.png";
import GalleryImg48 from "/public/images/gallery/48.png";
import GalleryImg49 from "/public/images/gallery/49.png";
import GalleryImg50 from "/public/images/gallery/50.png";
import GalleryImg51 from "/public/images/gallery/51.png";
import GalleryImg52 from "/public/images/gallery/52.png";
import GalleryImg53 from "/public/images/gallery/53.png";
import GalleryImg54 from "/public/images/gallery/54.png";
import GalleryImg55 from "/public/images/gallery/55.png";
import GalleryImg56 from "/public/images/gallery/56.png";
import GalleryImg57 from "/public/images/gallery/57.png";
import GalleryImg58 from "/public/images/gallery/58.png";
import GalleryImg59 from "/public/images/gallery/59.png";
import GalleryImg60 from "/public/images/gallery/60.png";
import GalleryImg61 from "/public/images/gallery/61.png";
import GalleryImg62 from "/public/images/gallery/62.png";
import GalleryImg63 from "/public/images/gallery/63.png";
import GalleryImg64 from "/public/images/gallery/64.png";
import GalleryImg65 from "/public/images/gallery/65.png";
import GalleryImg66 from "/public/images/gallery/66.png";
import VideoMarquee from "../components/VideoMarquee";
import Image from "next/image";

const DefaultImage = styled(Image)`
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  height: 100%;

  @media (max-width: 600px) {
    height: auto;
  }
`;

const DefaultImageWithoutHeight = styled(Image)`
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const DefaultTallImage = styled(Image)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "66vh"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 600px) {
    height: auto;
  }
`;

const FixedHeightWrapper = styled.div`
  height: ${(props) => props.height || "270vh"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResponsiveImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: ${(props) => props.height || "auto"};
`;

const GalleryPage = () => {
  const isTab = useMediaQuery("(max-width:1200px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ margin: "40px 0" }}>
      <Grid container spacing={isMobile ? 0.5 : 1}>
        <Grid item xs={12}>
          <DefaultImage src={GalleryImg1} alt="First Row" />
        </Grid>

        <Grid item xs={12} sm={7}>
          <DefaultImage src={GalleryImg2} alt="Second Row Left" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <DefaultImage src={GalleryImg3} alt="Second Row Right" />
        </Grid>

        <Grid item xs={12} sm={8}>
          <DefaultImage src={GalleryImg4} alt="Third Row Left" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg5} alt="Third Row Right" />
        </Grid>

        {isTab ? (
          <>
            <Grid item xs={12} sm={12}>
              <DefaultImage src={GalleryImg8} alt="Second Row Right" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultImage src={GalleryImg6} alt="Second Row Left" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultImage src={GalleryImg11} alt="Second Row Right" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultImage src={GalleryImg12} alt="Second Row Right" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DefaultImage src={GalleryImg7} alt="Second Row Left" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DefaultImage src={GalleryImg9} alt="Second Row Right" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DefaultImage src={GalleryImg10} alt="Second Row Right" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DefaultImage src={GalleryImg13} alt="Second Row Right" />
            </Grid>
          </>
        ) : (
          <>
             <Grid item xs={12} sm={3}>
              <FixedHeightWrapper>
                <ResponsiveImage src={GalleryImg6} alt="Fourth Row Small"/>
                <ResponsiveImage
                  src={GalleryImg8}
                  alt="Below GalleryImg 6"
                  style={{ marginTop: "8px" }}
                  height="120vh"
                />
                <ResponsiveImage
                  src={GalleryImg11}
                  alt="Below GalleryImg 11"
                  style={{ marginTop: "8px"}}
                />
                <ResponsiveImage
                  src={GalleryImg12}
                  alt="Below GalleryImg 12"
                  style={{ marginTop: "8px" }}
                  height="100vh"

                />
              </FixedHeightWrapper>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg7}
                    alt="Fourth Row Tall"
                    height="60vh"
                  />
                </Grid>
                <Grid item>
                  <DefaultTallImage src={GalleryImg9} alt="Fourth Row Tall" />
                </Grid>
                <Grid item>
                  <DefaultTallImage src={GalleryImg10} alt="Fourth Row Tall" />
                </Grid>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg13}
                    alt="Fourth Row Tall"
                    height="74vh"
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}

        <Grid item xs={12} sm={6}>
          <DefaultImage src={GalleryImg14} alt="Second Row Left" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DefaultImage src={GalleryImg15} alt="Second Row Right" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg16} alt="Second Row Left" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg17} alt="Second Row Right" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg18} alt="Second Row Right" />
        </Grid>

        <Grid item xs={12}>
          <DefaultImage src={GalleryImg19} alt="First Row" />
        </Grid>

        {isTab ? (
          <>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg20} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg21} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg23} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg22} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg25} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg24} alt="First Row" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={7}>
          <FixedHeightWrapper height="206vh">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <DefaultImageWithoutHeight
                    src={GalleryImg20}
                    alt="Second Row Left"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DefaultImage src={GalleryImg21} alt="Second Row Right" />
                </Grid>
              </Grid>

              <ResponsiveImage
                src={GalleryImg23}
                alt="Fourth Row Small"
                style={{ marginTop: "8px" }}
                height="100vh"
              />
              <ResponsiveImage
                src={GalleryImg24}
                alt="Below GalleryImg 6"
                style={{ marginTop: "8px" }}
                height="100vh"

              />
            </FixedHeightWrapper>

            </Grid>
            <Grid item xs={12} sm={5}>
              <Grid container direction="column" spacing={1.4}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg22}
                    alt="Fourth Row Tall"
                    height="138vh"
                  />
                </Grid>
                <Grid item>
                  <DefaultTallImage src={GalleryImg25} alt="Fourth Row Tall" />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}

        {isTab ? (
          <>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg26} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg28} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg29} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg27} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg30} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg31} alt="First Row" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={9}>
              <Grid container direction="column" spacing={1}>
              <FixedHeightWrapper height="228vh">
                <ResponsiveImage
                  src={GalleryImg26}
                  alt="Second Row Left"
                  style={{ marginTop: "8px" }}
                  height="100vh"
                />
                <ResponsiveImage
                  src={GalleryImg28}
                  alt="Second Row Left"
                  style={{ marginTop: "10px" }}
                  height="100vh"
                />
                <Grid container spacing={1} style={{ marginTop: "2px", height: "100vh" }}>
                  <Grid item xs={12} sm={4}>
                    <ResponsiveImage src={GalleryImg29} alt="Second Row Left" height="-webkit-fill-available"/>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <ResponsiveImage src={GalleryImg30} alt="Second Row Right" height="-webkit-fill-available"/>
                  </Grid>
                </Grid>
              </FixedHeightWrapper>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FixedHeightWrapper height="226vh">
              <Grid container direction="column" spacing={0.5}>
                <Grid item>
                  <ResponsiveImage
                    src={GalleryImg27}
                    alt="Fourth Row Tall"
                    height="166vh"
                  />
                </Grid>
                <Grid item height="inherit">
                  <ResponsiveImage src={GalleryImg31} alt="Fourth Row Tall" height="60vh"/>
                </Grid>
              </Grid>
              </FixedHeightWrapper>
            </Grid>
          </>
        )}

        {isTab ? (
          <>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg32} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg36} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg33} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg35} alt="First Row" />
            </Grid>

            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg37} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg39} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg38} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg41} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg40} alt="First Row" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={5}>
              <Grid container direction="column">
                <FixedHeightWrapper height="172vh">
                <Grid item>
                  <ResponsiveImage
                    src={GalleryImg32}
                    alt="Fourth Row Tall"
                    height="82vh"
                  />
                </Grid>

                <Grid item style={{ marginTop: "8px" }} height="90vh">
                  <ResponsiveImage src={GalleryImg34} alt="Fourth Row Tall" height="40vh"/>
                  <ResponsiveImage
                    src={GalleryImg36}
                    alt="Fourth Row Tall"
                    style={{ marginTop: "10px" }}
                    height="46vh"
                  />
                </Grid>
                </FixedHeightWrapper>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg33}
                    alt="Second Row Right"
                    height="100vh"
                  />
                </Grid>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg35}
                    alt="Second Row Right"
                    height="70vh"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={8}>
            <FixedHeightWrapper height="180vh" style={{gap: "7px", justifyContent: "start"}}>
                <Grid item>
                  <ResponsiveImage src={GalleryImg37} alt="Second Row Right" height="89vh"/>
                </Grid>
                <Grid item>
                  <ResponsiveImage src={GalleryImg39} alt="Second Row Right" height="89vh"/>
                </Grid>
              </FixedHeightWrapper>
            </Grid>

            <Grid item xs={12} sm={4}>
                <FixedHeightWrapper height="180vh" style={{gap: "6px"}}>
                <Grid item>
                    <ResponsiveImage
                      src={GalleryImg38}
                      alt="Second Row Right"
                      height="35vh"
                    />
                  </Grid>
                  <Grid item>
                    <ResponsiveImage
                      src={GalleryImg40}
                      alt="Second Row Right"
                      height="96vh"
                    />
                  </Grid>
                  <Grid item>
                    <ResponsiveImage src={GalleryImg41} alt="Second Row Right" height="46vh"/>
                  </Grid>
                </FixedHeightWrapper>
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <DefaultImage src={GalleryImg42} alt="First Row" />
        </Grid>

        {isTab ? (
          <>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg43} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg44} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg45} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={9}>
              <DefaultImage src={GalleryImg46} alt="First Row" />
            </Grid>

            <Grid item xs={12} md={3}>
              <DefaultImage src={GalleryImg48} alt="First Row" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={7}>
              <DefaultTallImage
                src={GalleryImg43}
                alt="First Row"
                height="82vh"
              />
            </Grid>

            <Grid item xs={12} sm={5}>
              <Grid container direction="column" spacing={0.5}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg44}
                    alt="First Row"
                    height="36vh"
                  />
                </Grid>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg45}
                    alt="First Row"
                    height="45vh"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={9}>
              <DefaultImage src={GalleryImg46} alt="First Row" />
            </Grid>
            <Grid item xs={3}>
              <DefaultImage src={GalleryImg48} alt="First Row" />
            </Grid>
          </>
        )}

        {isTab ? (
          <>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg50} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg54} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg49} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg51} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg52} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg53} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg47} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg55} alt="First Row" />
            </Grid>

            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg56} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg57} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg58} alt="First Row" />
            </Grid>
            <Grid item xs={12}>
              <DefaultImage src={GalleryImg59} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg61} alt="First Row" />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultImage src={GalleryImg60} alt="First Row" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={5}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg47}
                    alt="First Row"
                    height="55vh"
                  />
                </Grid>

                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg50}
                    alt="First Row"
                    height="100vh"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "6px" }}>
                <DefaultTallImage
                  src={GalleryImg54}
                  alt="First Row"
                  width="171%"
                  height="57vh"
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Grid container direction="column" spacing={0.8}>
                <Grid item>
                  <DefaultTallImage
                    src={GalleryImg49}
                    alt="First Row"
                    height="71vh"
                  />
                </Grid>

                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <DefaultTallImage
                        src={GalleryImg51}
                        alt="Second Row Left"
                        height="41vh"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DefaultTallImage
                        src={GalleryImg52}
                        alt="Second Row Right"
                        height="41vh"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <DefaultTallImage
                        src={GalleryImg53}
                        alt="Second Row Left"
                        height="42vh"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DefaultTallImage
                        src={GalleryImg55}
                        alt="Second Row Right"
                        height="100vh"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FixedHeightWrapper height="150vh" style={{gap: "6px"}}>
                <Grid item>
                  <ResponsiveImage
                    src={GalleryImg56}
                    alt="First Row"
                    height="33vh"
                  />
                </Grid>

                <Grid item>
                  <ResponsiveImage
                    src={GalleryImg58}
                    alt="First Row"
                    height="115vh"
                  />
                </Grid>
                </FixedHeightWrapper>
            </Grid>

            <Grid item xs={12} sm={9}>
            <FixedHeightWrapper height="150vh">
              <Grid item height="inherit">
                <DefaultImage src={GalleryImg57} alt="First Row" height="100vh"/>
              </Grid>
            </FixedHeightWrapper>
            </Grid>

            <Grid item xs={12} sm={3}>
            <FixedHeightWrapper height="auto" style={{gap: "6px"}}>
                <Grid item>
                  <ResponsiveImage src={GalleryImg59} alt="First Row" height="31vh"/>
                </Grid>

                <Grid item>
                  <ResponsiveImage src={GalleryImg61} alt="First Row" height="31vh"/>
                </Grid>
                </FixedHeightWrapper>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Grid item>
                <DefaultTallImage
                  src={GalleryImg60}
                  alt="First Row"
                  height="64vh"
                />
              </Grid>
            </Grid>
          </>
        )}

        <Grid item xs={12} sm={12}>
          <DefaultImage src={GalleryImg62} alt="First Row" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg63} alt="Second Row Left" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg64} alt="Second Row Right" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DefaultImage src={GalleryImg65} alt="Second Row Right" />
        </Grid>

        <Grid item xs={12} sm={12}>
          <DefaultImage src={GalleryImg66} alt="First Row" />
        </Grid>
      </Grid>

      <VideoMarquee />
    </div>
  );
};

export default GalleryPage;
