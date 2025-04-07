import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 border-t pt-6 text-center text-gray-600">
      <h3 className="text-md font-semibold mb-2">Follow Me</h3>
      <div className="flex justify-center space-x-6 text-2xl mb-3">
        <a
          href="https://www.linkedin.com/in/raphael-omonayin-45a63225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appttps://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Raphae23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Everything_devv?t=I8K0bWx9wmht06cGdAgXFw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/everythingdevv?igsh=MTAya2xid3dtbGV5Ng%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
