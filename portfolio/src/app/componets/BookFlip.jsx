"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import bookPages from "@/app/utils/bookPages";
import Image from "next/image";

const Page = React.forwardRef(({ children, number }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white flex flex-col items-center justify-center w-full h-full shadow-md p-8"
    >
      {/* ref is required */}
      <h1 className="text-2xl font-bold mb-4">Page Header</h1>
      <div className="text-center text-gray-700 mb-4">{children}</div>
      <div className="text-sm text-gray-500">Page number: {number}</div>
    </div>
  );
});
Page.displayName = "Page";

const BookFlip = () => {
  return (
    <div className="flex justify-center py-10">
      <HTMLFlipBook
        width={700}
        height={600}
        showCover={true}
        className="shadow-2xl"
      >
        {/* Front Cover */}
        <Page number="Cover">
          <h1 className="text-3xl font-bold mb-4">My Architecture Book</h1>
          <p className="text-gray-600">By Your Name</p>
        </Page>

        {/* Dynamic Pages */}
        {bookPages.map((page, index) => (
          <Page key={index} number={index + 1}>
            <h2 className="text-xl font-bold mb-2">{page.title}</h2>
            <Image
              src={page.image}
              alt={page.title}
              width={350}
              height={200}
              className="my-4 "
            />
            <p className="text-center text-gray-600">{page.description}</p>
          </Page>
        ))}

        {/* Contact Page */}
        <Page number="Contact">
          <h2 className="text-xl font-bold">Contact Me</h2>
          <p className="text-gray-600">Email: architect@example.com</p>
        </Page>

        {/* BACK COVER PAGE */}
        <Page number="Back Cover">
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600">See you in the next project.</p>
        </Page>

      </HTMLFlipBook>
    </div>
  );
};

export default BookFlip;
