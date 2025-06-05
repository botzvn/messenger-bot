import { Download, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownload = () => {
    window.open("https://example.com/download", "_blank");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:p-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <h1 className="p-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 bg-clip-text text-transparent mb-4 lg:mb-6 leading-tight">
            Messenger Bot
            {/* <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span> */}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            {/* //tạo một câu kích thích về Messenger Bot */}
            Master the art of the lure – smooth ride till the slaughter
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center animate-scale-in delay-300 w-full">
          <iframe
            className="w-full h-full rounded-xl"
            style={{ maxHeight: "70vh", minHeight: "50vh", maxWidth: "50vw" }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1&origin=https://lovableproject.com"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in delay-500 pb-12">
          {/* Download Button */}
          <div className="relative inline-block group mb-6 lg:mb-8 mt-10">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25"
            >
              <Download className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
              Download Now
            </Button>

            {/* Button Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
