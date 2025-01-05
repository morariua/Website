'use client'; // Mark this as a Client Component

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
} from 'react-icons/si';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa';
import React from 'react';
import { Card } from '../components/card'; 
import {ScrollShadow} from "@nextui-org/scroll-shadow";

export default function SkillsDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur');
  const [placement, setPlacement] = React.useState('right');

  const handleOpen = (placement: React.SetStateAction<string>) => {
    setPlacement(placement);
    onOpen();
  };

  const skills = [
    // Python-related skills
    { title: 'Python', icon: <SiPython className="w-6 h-6 text-yellow-400" /> },
    { title: 'PyTorch', icon: <SiPytorch className="w-6 h-6 text-red-600" /> },
    { title: 'TensorFlow', icon: <SiTensorflow className="w-6 h-6 text-orange-500" /> },
    { title: 'Scikit-learn', icon: <SiScikitlearn className="w-6 h-6 text-blue-400" /> },

    // Version control
    { title: 'Git', icon: <SiGit className="w-6 h-6 text-orange-600" /> },

    // Web development
    { title: 'React', icon: <SiReact className="w-6 h-6 text-blue-500" /> },
    { title: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },

    // Cloud and tools
    { title: 'Azure', icon: <VscAzure className="w-6 h-6 text-blue-600" /> },
    { title: 'AWS', icon: <FaAws className="w-6 h-6 text-yellow-600" /> },
    { title: 'VS Code', icon: <VscVscode className="w-6 h-6 text-blue-500" /> },
  ];

  return (
    <>
      {/* My Skills Button */}
      <div className="flex flex-wrap gap-3">
        {['right'].map((placement) => (
          <Button
            key={placement}
            className="capitalize bg-[#18181b] rounded-lg hover:bg-[#696971] hover:outline-white focus:outline-none" // Remove focus outline
            onPress={() => handleOpen(placement)}
          >
            My Skills
          </Button>
        ))}
      </div>

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onOpenChange={onOpenChange}
        backdrop="blur" // Ensure blur backdrop is applied
        size="md" // Set drawer size to cover a quarter of the screen
        className="fixed right-0 overflow-visible w-2/5 h-full backdrop-blur-md" // Ensure drawer stays on the right side
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0, // Slide in from the right
              transition: { duration: 0.3 },
            },
            exit: {
              x: '100%', // Slide out to the right
              opacity: 0,
              transition: { duration: 0.3 },
            },
          },
        }}
      >
        <DrawerContent className="bg-[#18181b] rounded-lg">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 border-none outline-none text-white">My Skills</DrawerHeader>
              <DrawerBody className="overflow-y-auto"> {/* Add scroll option */}
              <ScrollShadow hideScrollBar></ScrollShadow>
                <div className="flex flex-col gap-4"> {/* Vertical alignment */}
                  {skills.map((skill, index) => (
                    <Card key={index}> {/* Use the custom Card component */}
                      <div className="p-4">
                        <div className="flex justify-center items-center text-white">
                          {skill.icon}
                        </div>
                        <div className="text-center mt-2 text-white">
                          <b>{skill.title}</b>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button className="text-white rounded-md hover:outline-white" color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
