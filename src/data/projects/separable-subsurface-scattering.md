---
title: "Separable Subsurface Scattering in VR"
short: "SSSS implemented for Unity and VR"
order: 3
landing: { image: "../../images/project/ssss/ssss.png" }
images:
    [
        "../../images/project/ssss/ssss1.jpg",
        "../../images/project/ssss/ssss2.jpg",
        "../../images/project/ssss/ssss3.jpg",
        "../../images/project/ssss/ssss4.jpg",
        "../../images/project/ssss/ssss5.jpg",
        "../../images/project/ssss/ssss6.jpg",
        "../../images/project/ssss/ssss7.jpg",
        "../../images/project/ssss/ssss8.jpg",
        "../../images/project/ssss/ssss.png"
    ]
---

My bachelor thesis revolved around Separable Subsurface Scattering (SSSS). Subsurface Scattering is a physical phenomenon where light enters matter, scatters inside and exits around the point of entry. The result is that the surface appears slightly blurred. This is very important to let materials appear believable. A current approach by [Jimenez et al.](https://users.cg.tuwien.ac.at/zsolnai/gfx/separable-subsurface-scattering-with-activision-blizzard/) allows to calculate this effect as a screen-space filter and with separable kernels.

The goals of this thesis included to find out how SSSS can be implemented in the Unity game engine and for VR. If one wants to implement SSSS in a game engine, the rendering needs to be adjusted. The fraction of the light, that is directly reflected at the surface (seen as specular reflections), needs to be separated from the image before the screen-space effect is applied.

Furthermore, approaches for translucency (light is visible through an object) and a physically based model for specular reflections has been added. The result is a Unity application where a user can inspect the different approaches, adjust relevant settings and examine the effects with and without VR.

If you are interested in the written thesis, you can download it on the website of the [Research Division of Computer Graphics](https://www.cg.tuwien.ac.at/research/publications/2018/Fischer-2018-sssvr/) of the Technical University of Vienna.  
The demo application is available under this [link](https://drive.google.com/file/d/19cWkXh19uDCIa6Mcu3qy1UeIxYlOmjJA/view?usp=sharing).

<bs-row>

<bs-col>

## Technologies

-   [Unity game engine](https://unity.com/)

</bs-col>

</bs-row>
