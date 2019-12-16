import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
    "mdbreact";

class CarouselPage extends React.Component {

    state = {
        imgSelected: 1
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps ' +  nextProps.imgSelected + ' ' + prevState.imgSelected )
        if (prevState.imgSelected !== nextProps.imgSelected) {
            return {
                imgSelected : nextProps.imgSelected,
            };
        }
        return null;
    }

    render() {

        const { dataImg } = this.props
        console.log('update render ' + Number(this.state.imgSelected))

        return (
            <MDBCarousel
                length={dataImg.length}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
                slide
                interval={3000}
                activeItem={1}
            >
                <MDBCarouselInner>
                    {dataImg.map(tile => (
                        <MDBCarouselItem itemId={(dataImg.indexOf(tile) + 1).toString()} key={dataImg.indexOf(tile)} >
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    alt={tile.title}
                                    src={tile.img}
                                    height={"477px"}
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    ))}
                </MDBCarouselInner>
            </MDBCarousel>
        );
    }

}

export default CarouselPage;