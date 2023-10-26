import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

function HomeFaqs() {
  const faqs = [
    {
      question: "Benefits of OSO?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
    {
      question: "Why should I choose OSO?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
    {
      question: "How is it different than other AI?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
    {
      question: "How Does OSO's AI Differ From Others?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
    {
      question: "What is pricing?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
    {
      question: "On which platforms can I access OSO?",
      answer:
        "Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem Lorem ipsem",
    },
  ];
  return (
    <>
      <div className="container-main pt-8 md:pt-40 pb-40">
        <div className="md:text-center text-black text-[40px] md:text-5xl font-bold md:font-extrabold leading-[56px] md:leading-[64px]">
          Frequently Asked Questions
        </div>

        <div className="w-full px-4 pt-16 flex flex-col gap-4">
          {faqs.map((item, index) => (
            <div key={index} className="w-full rounded-lg bg-gray-100 p-6 ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-2xl font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span>{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-6 w-6 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeFaqs;
