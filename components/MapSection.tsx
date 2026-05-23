export function MapSection() {
  return (
    <section className="w-full">
      {/* Info bar */}
      <div className="bg-[#492e3b] px-4 py-6 sm:px-6 md:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d2c3c7]">
              Visit Us
            </p>
            <p className="mt-1 text-[16px] font-medium text-white">
              Le Thia Cares — Anna Nagar, Chennai
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919342471839"
              className="flex items-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              +91 93424 71839
            </a>
            <a
              href="https://maps.app.goo.gl/tnJeT6aFb4KVhGct7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Full-width map */}
      <div className="h-[320px] w-full md:h-[420px]">
        <iframe
          title="Le Thia Cares Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31091.948170719705!2d80.1538048!3d13.0678784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5559704c48f5a3%3A0xda74ab6ae2c65c53!2sLe%20Thia%20Cares%20%E2%80%93%20Anna%20Nagar%2C%20Chennai%2C%20Third%20Floor%2C%20D.%20COMPLEX%2C%20NO.573-C%2C%20T%2C%20School%20Rd%2C%20Anna%20Nagar%20West%20Extension%2C%20Chennai%2C%20Tamil%20Nadu%20600101!3m2!1d13.0933107!2d80.1937753!5e0!3m2!1sen!2sin!4v1779525427285!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
