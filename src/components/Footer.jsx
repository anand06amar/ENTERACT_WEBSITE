import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl mb-4">STAY UPDATED</h3>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="hover:text-yellow-300">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-yellow-300">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://linkedin.com" className="hover:text-yellow-300">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://youtube.com" className="hover:text-yellow-300">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;