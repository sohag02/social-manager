'use client'
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, Calendar, Clock, BarChart, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      
      <Navbar />

      <section className="container mx-auto px-4 pt-32 pb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 text-sm font-medium rounded-full glass-morphism inline-block mb-4"
          >
            Manage all your social media in one place
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Your Social Media, Simplified
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule, analyze, and manage your social media content across multiple platforms from a single dashboard.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="w-full aspect-[16/9] max-w-5xl mx-auto rounded-xl glass-morphism p-1 animate-float">
            <div className="w-full h-full bg-black/40 rounded-lg"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent -bottom-px" />
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you manage and grow your social media presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Calendar className="h-6 w-6" />}
            title="Smart Scheduling"
            description="Schedule your posts at the perfect time for maximum engagement"
            delay={0.1}
          />
          <FeatureCard
            icon={<Instagram className="h-6 w-6" />}
            title="Multi-platform Support"
            description="Post to Instagram, YouTube, and Facebook from one place"
            delay={0.2}
          />
          <FeatureCard
            icon={<BarChart className="h-6 w-6" />}
            title="Analytics"
            description="Track your performance with detailed analytics and insights"
            delay={0.3}
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="Auto-posting"
            description="Set it and forget it with our automated posting feature"
            delay={0.4}
          />
          <FeatureCard
            icon={<Youtube className="h-6 w-6" />}
            title="Video Support"
            description="Upload and schedule videos for multiple platforms"
            delay={0.5}
          />
          <FeatureCard
            icon={<Facebook className="h-6 w-6" />}
            title="Audience Insights"
            description="Understand your audience across all platforms"
            delay={0.6}
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-morphism p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to streamline your social media?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of content creators who are saving time and growing their audience with Social Manager.
          </p>
          <Button size="lg" className="rounded-full">
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
      
      <Footer />  
      
    </div>
  );
}