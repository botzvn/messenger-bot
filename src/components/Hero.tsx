
import { Download, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownload = () => {
    // Replace with your actual download link
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
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 lg:mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our revolutionary platform that transforms the way you work, create, and innovate
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center mb-8 animate-scale-in delay-300">
          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="relative group">
              {/* Video Container with Glow Effect */}
              <div className="relative bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-1 rounded-2xl">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1&origin=https://lovableproject.com"
                      title="Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 lg:p-6 transform scale-110">
                        <Youtube className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in delay-500 pb-12">
          <div className="mb-6 lg:mb-8">
            <p className="text-base lg:text-lg text-gray-300 mb-6 px-4">
              Ready to get started? Download now and join thousands of satisfied users.
            </p>
          </div>
          
          {/* Download Button */}
          <div className="relative inline-block group mb-6 lg:mb-8">
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
          
          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-sm text-gray-400 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No registration required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Instant download</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
