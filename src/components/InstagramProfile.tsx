import { Grid3X3, Bookmark, UserSquare2, BadgeCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const InstagramProfile = () => {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-4">
            Follow Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Connect on <span className="text-gradient">Instagram</span>
          </h2>
        </div>

        {/* Instagram Profile Card */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl bg-[#000000] border border-[#262626] overflow-hidden">
            {/* Profile Header */}
            <div className="p-4 sm:p-6">
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                    <div className="w-full h-full rounded-full bg-black p-1">
                      <img
                        src={logo}
                        alt="Garry Digital 360"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-lg sm:text-xl truncate">
                      garrydigital360
                    </h3>
                    <BadgeCheck className="w-5 h-5 text-[#0095f6] flex-shrink-0" />
                  </div>
                  <p className="text-[#a8a8a8] text-sm mb-3">Garry Digital 360</p>

                  {/* Stats */}
                  <div className="flex gap-4 sm:gap-6 text-sm">
                    <div className="text-center sm:text-left">
                      <span className="text-white font-semibold">33</span>
                      <span className="text-[#a8a8a8] ml-1">posts</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-white font-semibold">597</span>
                      <span className="text-[#a8a8a8] ml-1">followers</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-white font-semibold">178</span>
                      <span className="text-[#a8a8a8] ml-1">following</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-4 text-sm">
                <p className="text-[#a8a8a8] font-semibold mb-1">Photography studio</p>
                <p className="text-white leading-relaxed">
                  Google Trusted Photography, Google Virtual Tour, 360 tour
                </p>
                <p className="text-white">X BITSIAN</p>
              </div>

              {/* Follow Button */}
              <a
                href="https://instagram.com/garrydigital360"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block text-center py-2 px-4 rounded-lg bg-[#0095f6] hover:bg-[#1877f2] text-white font-semibold text-sm transition-colors duration-300"
              >
                Follow
              </a>
            </div>

            {/* Tabs */}
            <div className="flex border-t border-[#262626]">
              <button className="flex-1 py-3 flex items-center justify-center gap-2 text-white border-t border-white">
                <Grid3X3 className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Posts</span>
              </button>
              <button className="flex-1 py-3 flex items-center justify-center gap-2 text-[#a8a8a8]">
                <Bookmark className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Saved</span>
              </button>
              <button className="flex-1 py-3 flex items-center justify-center gap-2 text-[#a8a8a8]">
                <UserSquare2 className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Tagged</span>
              </button>
            </div>

            {/* Preview Grid Placeholder */}
            <div className="grid grid-cols-3 gap-0.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <span className="text-2xl opacity-50">🎬</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramProfile;
