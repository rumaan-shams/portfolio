import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const WelcomeScreen = ({ onStart }) => {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <div className="welcome-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>

        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Logo */}
        <motion.div
          className="logo-wrapper"
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <div className="logo-glow"></div>

          <img
            src="/rumaan.ico"
            alt="Rumaan Logo"
            className="welcome-logo"
          />

          <div className="light-sweep"></div>
        </motion.div>

        {/* Name */}
        <TypeAnimation
          sequence={[
            "R",
            100,
            "RU",
            100,
            "RUM",
            100,
            "RUMA",
            100,
            "RUMAA",
            100,
            "RUMAAN",
            1500,
          ]}
          wrapper="h1"
          speed={40}
          cursor={false}
          className="welcome-title"
        />

        {/* Subtitle */}
        <motion.h3
          className="welcome-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
        >
          ROLE PLAY DEVELOPER
        </motion.h3>

        {/* Description */}
        <motion.p
          className="welcome-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
        >
          Building immersive roleplay systems,
          premium web experiences and modern digital products.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="welcome-divider"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
          }}
        />

        {/* Button */}
        <motion.button
          className="welcome-button"
          onClick={onStart}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.5,
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          ENTER PORTFOLIO
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;