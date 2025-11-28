import { FaEnvelope, FaGithub, FaFacebookMessenger } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="mt-12 mb-10">
      <h3 className="text-lg font-semibold mb-4">Contact</h3>

      <p className="text-sm text-slate-300 mb-4">
        ถ้าสนใจร่วมงานหรืออยากพูดคุยเรื่องโปรเจกต์ สามารถติดต่อผมได้ตามช่องทางด้านล่าง
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400" />
          <a
            href="mailto:630407030037@dpu.ac.th"
            className="hover:text-emerald-400"
          >
            630407030037@dpu.ac.th
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-yellow-400" />
          <a
            href="https://github.com/ThunyathepPNA"
            target="_blank"
            className="hover:text-yellow-400"
          >
            ThunyathepPNA
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebookMessenger className="text-yellow-400" />
          <span>Facebook / Messenger: Thunyathep Palakavong Na Ayudhya</span>
        </div>
      </div>
    </section>
  );
}
