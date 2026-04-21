import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Your message has been received. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dilipkohar4320@gmail.com",
      href: "mailto:dilipkohar4320@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7080779516",
      href: "tel:+917080779516",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gandhinagar, Gujarat, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="heading-lg">GET IN TOUCH</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left: Communication Nodes */}
          <div className="space-y-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
               <h3 className="text-3xl font-bold tracking-tight uppercase italic underline underline-offset-8 decoration-primary/30">Connect With Me</h3>
               <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md">
                 Ready to discuss collaboration opportunities or technical projects.
               </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 flex items-center gap-6 group hover:border-primary/40 transition-all duration-500 rounded-2xl"
                >
                   <div className="p-4 rounded-xl bg-white/5 text-primary border border-white/5 group-hover:border-primary/30 shadow-2xl transition-all">
                      <info.icon className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-bold hover:text-primary transition-colors tracking-tight">{info.value}</a>
                      ) : (
                        <p className="text-lg font-bold tracking-tight">{info.value}</p>
                      )}
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-4">
               {[
                 { icon: Github, href: "https://github.com/dilipprajapati432" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
               ].map((social, i) => (
                 <a
                   key={i}
                   href={social.href}
                   target="_blank"
                   className="p-4 glass-card rounded-2xl border-white/5 text-muted-foreground hover:text-primary hover:border-primary/20 transition-all shadow-xl"
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Right: Message Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-14 rounded-[2.5rem] border-white/5 relative group hover:border-primary/10 transition-all duration-700 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-14 px-6 rounded-xl"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-14 px-6 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Message</label>
                <Textarea
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary/50 p-6 rounded-2xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-8 text-sm font-bold uppercase tracking-widest rounded-2xl shadow-[0_15px_30px_hsla(var(--primary),0.2)] hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 group/btn"
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
