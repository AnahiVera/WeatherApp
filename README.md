
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AnahiVera/WeatherApp">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">Weather App</h3>

  <p align="center">
    This project is a React-based application that allows users to check current weather conditions for different locations. It fetches weather data from an external API and displays information like temperature, humidity, wind speed, and weather conditions. It includes features such as dynamic search functionality, map display of location and responsive design for usability across devices
    <br />
    <a href="https://github.com/AnahiVera/WeatherApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://weather-app-two-roan-10.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/AnahiVera/WeatherApp/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/AnahiVera/WeatherApp/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
        <li><a href="#contributing">Contributing</a></li>    
        <li><a href="#license">License</a></li>
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


**📖 One-Page Layout**

**🎨 Styled with React-Bootstrap and Css**

**📱 Fully Responsive**

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* [![React][React.js]][React-url]
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Create an account in https://www.weatherapi.com/ to be able to obtain an API KEY


### Installation

1. Get a free API Key [https://www.weatherapi.com/](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/AnahiVera/WeatherApp.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```env
   VITE_REACT_APP_URL = 'http://api.weatherapi.com/v1/current.json?aqi=no';
   VITE_REACT_APP_KEY = 'ENTER YOUR API';
   ```
5. Run the project
   ```sh
   npm run dev
   ```
6. Open in local host
    ```sh
    http://localhost:5173/
    ``` 

7. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin AnahiVera/WeatherApp
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/AnahiVera/WeatherApp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AnahiVera/WeatherApp" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AnahiVera/WeatherApp.svg?style=for-the-badge
[contributors-url]: https://github.com/AnahiVera/WeatherApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AnahiVera/WeatherApp.svg?style=for-the-badge
[forks-url]: https://github.com/AnahiVera/WeatherApp/network/members
[stars-shield]: https://img.shields.io/github/stars/AnahiVera/WeatherApp.svg?style=for-the-badge
[stars-url]: https://github.com/AnahiVera/WeatherApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/AnahiVera/WeatherApp.svg?style=for-the-badge
[issues-url]: https://github.com/AnahiVera/WeatherApp/issues
[license-shield]: https://img.shields.io/github/license/AnahiVera/WeatherApp.svg?style=for-the-badge
[license-url]: https://github.com/AnahiVera/WeatherApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 