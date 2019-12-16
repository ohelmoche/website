
import React from "react";
import { MDBContainer, MDBCol } from "mdbreact";
import CarouselPage from './CarouselPage'
import GalleryImages from './GalleryImages'
import ModalPhoto from './ModalPhoto'

class NousDecouvrire extends React.Component {

    state = {
        img : 'https://mdbootstrap.com/img/Others/documentation/1.jpg',
        imgSelected: 1,
        ModalOpen: false
    }

    handleImgClick = (imgSelected) => {
        console.log(imgSelected)
        this.setState({ imgSelected , ModalOpen : true , img : dataImg[imgSelected - 1 ].img  })
    }

    handleModal = () => this.setState( { ModalOpen : !this.state.ModalOpen })

    render() {

        return (
            <MDBContainer className="justify-content-between pb-10" >

                <div className="font-weight-bold d-flex justify-content-center text-dark bg-white pt-2 pb-2">
                    <h2 className="mr-4 mb-0 ">Nous Découvrir</h2>
                </div>

                <MDBCol className="pb-5">
                    <CarouselPage dataImg={dataImg} imgSelected={this.state.imgSelected} />
                </MDBCol>

                <MDBCol>
                    <GalleryImages dataImg={dataImg} handleImgClick={this.handleImgClick} />
                </MDBCol>

                <ModalPhoto open={this.state.ModalOpen} handleModal={this.handleModal} img={this.state.img} />
             
            </MDBContainer>
        )
    }

}

const dataImg = [
    {
        img:
            'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
        cols: 1,
        title: 'image',
    },

    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
        cols: 1,
        title: 'image',
    },
    {
        img:
            'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
        cols: 2,
        title: 'image',
    }

];

export default NousDecouvrire
