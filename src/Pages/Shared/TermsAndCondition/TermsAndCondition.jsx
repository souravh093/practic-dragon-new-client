import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { FaArrowAltCircleUp } from 'react-icons/fa';


const terms = [
  {
    id: 1,
    title: "Introduction",
    content: `Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [company name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.`,
  },
  {
    id: 2,
    title: "Cookies",
    content: `This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [list of personal information].`,
  },
  {
    id: 3,
    title: "Accuracy of Information",
    content: `Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`,
  },
  {
    id: 4,
    title: "Liability",
    content: `Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.`,
  },
  {
    id: 5,
    title: "Governing Law",
    content: `This website is governed by the laws of [country], and any disputes arising in relation to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [country].`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TermsAndCondition = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <div className="space-y-6">
        {terms.map((term) => (
          <Disclosure key={term.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-900 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                  <span>{term.title}</span>
                  <FaArrowAltCircleUp
                    className={classNames(
                      open ? "-rotate-180" : "rotate-0",
                      "w-5 h-5 text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 mt-2">
                  {term.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <p className="mt-6">
        By using our website, you agree to these terms and conditions. If you
        have any questions, please{" "}
        <Link to="/register" className="text-blue-600">
          Register now
        </Link>{" "}
        for more information.
      </p>
    </div>
  );
};

export default TermsAndCondition;
