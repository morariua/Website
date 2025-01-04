'use client'; // Mark this as a Client Component

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
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

  const skills = [
    { title: 'Python', icon: <SiPython className="w-12 h-12 text-yellow-400" /> },
    { title: 'React', icon: <SiReact className="w-12 h-12 text-blue-500" /> },
    { title: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
    { title: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
    { title: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
    { title: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" /> },
    { title: 'Git', icon: <SiGit className="w-12 h-12 text-orange-600" /> },
  ];

  return (
    <>
      {/* Button to open the drawer */}
      <Button
        className="justify-between flex capitalize rounded-full hover:outline hover:outline-white"
        color="primary"
        variant="flat"
        onPress={onOpen}
      >
        Skills
      </Button>

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="right" // Slide in from the right
        size="md" // Adjust the size to cover a quarter of the screen
        backdrop="blur" // Blur the rest of the page
        className="bg-gray-900 text-white" // Match the website's theme
        style={{height: '100vh', width: '50vh'}}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <Card
                      key={index}
                      isPressable
                      shadow="sm"
                      className="bg-gray-800 text-white"
                    >
                      <CardBody className="flex justify-center items-center p-4">
                        {skill.icon}
                      </CardBody>
                      <CardFooter className="text-small justify-center">
                        <b>{skill.title}</b>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  className="capitalize rounded-full hover:outline hover:outline-white"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
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