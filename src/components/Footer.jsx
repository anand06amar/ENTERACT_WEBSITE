import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-light-aqua-blue text-black p-4">
      <div className="container mx-auto text-center">
        <h3 className="text-xl mb-4">STAY UPDATED</h3>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/enteractclub/" className="hover:text-yellow-300">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://www.instagram.com/enteractclub/?hl=en" className="hover:text-yellow-300">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/company/enteract-nit-durgapur/?originalSubdomain=in" className="hover:text-yellow-300">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://www.youtube.com/@EnteractClubNITDgp" className="hover:text-yellow-300">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;