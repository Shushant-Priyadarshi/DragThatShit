import { PreviewLink } from "@/components/ui/link-preview";
import {  Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-600 py-8 mt-12">
      <div className="container w-9/12  mx-auto ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-xl font-semibold dts">DragThatShit</h2>
            <p className="mt-3 text-sm">
              A product by{" "}
              <PreviewLink imagelink="https://imgs.search.brave.com/-6XIQiMQSKzN0dm2V3DFHiMut8I9QCTIJek9BAZNeio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L20vMEw3WDhiUWww/cWdBQUFBZC9zaGlu/Y2hhbi1iYXVuYS5n/aWY.gif"  link="https://www.linkedin.com/in/shushant-priyadarshi/">
                <span className="dts font-semibold">This Guy</span>
              </PreviewLink>
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#feature" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shushant-priyadarshi/" target="_blank" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Icons */}

            <div className="mt-3 space-y-2">
              <div>
                <a href="https://x.com/ceutical_"  target="_blank" className="hover:text-black">
                  <Twitter size={20} />
                </a>
              </div>
              <div>
                <a href="https://github.com/Shushant-Priyadarshi" target="_blank" className="hover:text-black">
                  <Github size={20} />
                </a>
              </div>
              <div>
                {" "}
                <a href="https://www.linkedin.com/in/shushant-priyadarshi/"  target="_blank" className="hover:text-black">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DragThatShit. All rights reserved.
      </div>
    </footer>
  );
}
