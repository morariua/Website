'use client'; // Mark this as a Client Component

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Button,
  useDisclosure,
  Card,
  CardBody,
  CardFooter,
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
} from 'react-icons/si';
import React from 'react';

export default function SkillsDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur');
  const [placement, setPlacement] = React.useState('right');

  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  const skills = [
    { title: 'Python', icon: <SiPython className="w-6 h-6 text-yellow-400" /> },
    { title: 'React', icon: <SiReact className="w-6 h-6 text-blue-500" /> },
    { title: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
    { title: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-green-600" /> },
    { title: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
    { title: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" /> },
    { title: 'Git', icon: <SiGit className="w-6 h-6 text-orange-600" /> },
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
              <DrawerHeader className="flex flex-col gap-1 text-white">My Skills</DrawerHeader>
              <DrawerBody className="overflow-y-auto"> {/* Add scroll option */}
                <div className="flex flex-col gap-4"> {/* Vertical alignment */}
                  {skills.map((skill, index) => (
                    <Card key={index} isPressable shadow="sm" className="bg-gray-800 text-white">
                      <CardBody className="flex justify-center items-center p-4">
                        {skill.icon}
                      </CardBody>
                      <CardFooter className="text-white text-small justify-center">
                        <b>{skill.title}</b>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button className="text-white rounded-md" color="danger" variant="light" onPress={onClose}>
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