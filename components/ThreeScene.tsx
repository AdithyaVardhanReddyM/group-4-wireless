// components/ThreeScene.tsx
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { Switch } from "@/components/ui/switch";
import React, { useRef, useState } from "react";
import { FBXLoader, MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Analysis from "./Analysis";

// Props for loading objects
type ObjectModelProps = {
  path: string;
  materialPath: string;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

type FBXModelProps = {
  path: string;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

const FBXModel: React.FC<FBXModelProps> = ({
  path,
  position,
  scale = 0.5,
  rotation = [0, 0, 0],
}) => {
  const fbx = useLoader(FBXLoader, path);
  return (
    <primitive
      object={fbx}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

const ObjectModel: React.FC<ObjectModelProps> = ({
  path,
  materialPath,
  position,
  scale = 0.5,
  rotation = [0, 0, 0],
}) => {
  // Load materials
  const materials = useLoader(MTLLoader, materialPath);

  // Load the object with its materials
  const obj = useLoader(OBJLoader, path, (loader: OBJLoader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <primitive
      object={obj.clone()}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

// SineWave component for animating between transmitter and receiver
const SineWave: React.FC = () => {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry>>(null); // Explicit type for lineRef
  let t = 0;

  useFrame(() => {
    if (!lineRef.current) return; // Only proceed if lineRef is defined

    t += 0.05;
    const positions = lineRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < 50; i++) {
      const x = i * 0.58 - 8; // Adjust length
      const y = Math.sin(x - t); // Wave oscillation
      positions[i * 3] = x; // X
      positions[i * 3 + 1] = y; // Y
      positions[i * 3 + 2] = 0; // Z
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
  });

  return (
    // @ts-ignore
    <line ref={lineRef} position={[0, 5, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={new Float32Array(50 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="orange" linewidth={4} />
    </line>
  );
};

const SineWave3: React.FC = () => {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry>>(null); // Explicit type for lineRef
  let t = 0;

  useFrame(() => {
    if (!lineRef.current) return; // Only proceed if lineRef is defined

    t += 0.05;
    const positions = lineRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < 50; i++) {
      const x = i * 0.32 - 8; // Adjust length
      const y = Math.sin(x - t); // Wave oscillation
      positions[i * 3] = x; // X
      positions[i * 3 + 1] = y; // Y
      positions[i * 3 + 2] = 0; // Z
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
  });

  return (
    // @ts-ignore
    <line ref={lineRef} position={[0, 5, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={new Float32Array(50 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="orange" linewidth={4} />
    </line>
  );
};

const SineWave2: React.FC = () => {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry>>(null); // Explicit type for lineRef
  let t = 0;

  useFrame(() => {
    if (!lineRef.current) return; // Only proceed if lineRef is defined

    t += 0.05;
    const positions = lineRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < 50; i++) {
      const x = i * 0.23 - 20; // Adjust length
      const y = Math.sin(x + t); // Wave oscillation
      positions[i * 3] = x; // X
      positions[i * 3 + 1] = y; // Y
      positions[i * 3 + 2] = 0; // Z
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
  });

  return (
    // @ts-ignore
    <line ref={lineRef} position={[0, 5, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={new Float32Array(50 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="red" linewidth={4} />
    </line>
  );
};

const SineWave2ref: React.FC = () => {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry>>(null); // Explicit type for lineRef
  let t = 0;

  useFrame(() => {
    if (!lineRef.current) return; // Only proceed if lineRef is defined

    t += 0.05;
    const positions = lineRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < 50; i++) {
      const x = i * 0.565 - 20; // Adjust length
      const y = -1 * Math.sin(x - t); // Wave oscillation
      positions[i * 3] = x; // X
      positions[i * 3 + 1] = y; // Y
      positions[i * 3 + 2] = 0; // Z
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
  });

  return (
    // @ts-ignore
    <line ref={lineRef} position={[0, 5, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={new Float32Array(50 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="blue" linewidth={4} />
    </line>
  );
};

const SineWaveRef: React.FC = () => {
  const lineRef = useRef<THREE.Line<THREE.BufferGeometry>>(null); // Explicit type for lineRef
  let t = 0;

  useFrame(() => {
    if (!lineRef.current) return; // Only proceed if lineRef is defined

    t += 0.05;
    const positions = lineRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < 50; i++) {
      const x = i * 0.19 + 10; // Adjust length
      const y = Math.sin(x + t); // Wave oscillation
      positions[i * 3] = x; // X
      positions[i * 3 + 1] = y; // Y
      positions[i * 3 + 2] = 0; // Z
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
  });

  return (
    // @ts-ignore
    <line ref={lineRef} position={[0, 5, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={new Float32Array(50 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="green" linewidth={4} />
    </line>
  );
};

const Wall: React.FC<{
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}> = ({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = "gray",
}) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry attach="geometry" args={[20, 3, 2]} />{" "}
      {/* Width, Height, Depth */}
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

type TwoSidedArrowProps = {
  color?: string;
  length?: number;
  thickness?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const TwoSidedArrow: React.FC<TwoSidedArrowProps> = ({
  color = "black",
  length = 10,
  thickness = 0.07,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const shaftRef = useRef<THREE.Mesh>(null);
  const leftHeadRef = useRef<THREE.Mesh>(null);
  const rightHeadRef = useRef<THREE.Mesh>(null);

  // Update arrow head positions based on length
  useFrame(() => {
    if (leftHeadRef.current && rightHeadRef.current) {
      leftHeadRef.current.position.set(-length / 2, 0, 0);
      rightHeadRef.current.position.set(length / 2, 0, 0);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Shaft */}
      <mesh ref={shaftRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[thickness, thickness, length, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left Arrow Head */}
      <mesh ref={leftHeadRef} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[thickness * 2, thickness * 4, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right Arrow Head */}
      <mesh ref={rightHeadRef} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[thickness * 2, thickness * 4, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

const LeftSidedArrow: React.FC<TwoSidedArrowProps> = ({
  color = "black",
  length = 10,
  thickness = 0.08,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const shaftRef = useRef<THREE.Mesh>(null);
  const leftHeadRef = useRef<THREE.Mesh>(null);

  // Update arrow head positions based on length
  useFrame(() => {
    if (leftHeadRef.current) {
      leftHeadRef.current.position.set(-length / 2, 0, 0);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Shaft */}
      <mesh ref={shaftRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[thickness, thickness, length, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left Arrow Head */}
      <mesh ref={leftHeadRef} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[thickness * 2, thickness * 4, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

const RightSidedArrow: React.FC<TwoSidedArrowProps> = ({
  color = "black",
  length = 10,
  thickness = 0.08,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const shaftRef = useRef<THREE.Mesh>(null);
  const rightHeadRef = useRef<THREE.Mesh>(null);

  // Update arrow head positions based on length
  useFrame(() => {
    if (rightHeadRef.current) {
      rightHeadRef.current.position.set(length / 2, 0, 0);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Shaft */}
      <mesh ref={shaftRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[thickness, thickness, length, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right Arrow Head */}
      <mesh ref={rightHeadRef} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[thickness * 2, thickness * 4, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

const ThreeScene: React.FC = () => {
  // State to manage wall visibility
  const [wall1Visible, setWall1Visible] = useState<boolean>(true);
  const [wall2Visible, setWall2Visible] = useState<boolean>(true);

  const [velocity, setVelocity] = useState<number>(0);
  const [d, setD] = useState<number>(20);
  const [r, setR] = useState<number>(10);
  // State for direction, default is "Right"
  const [direction, setDirection] = useState<"Left" | "Right">("Right");

  // Function to handle direction change
  const toggleDirection = (newDirection: "Left" | "Right") => {
    setDirection(newDirection);
  };

  // Toggle wall visibility
  const toggleWall1 = () => {
    setWall1Visible((prev) => !prev);
  };
  const toggleWall2 = () => {
    setWall2Visible((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 75 }}
          style={{ width: "100%", height: "100vh", backgroundColor: "#1a1a1a" }} // Set custom background color
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 10, 5]} intensity={1} />

          {/* Transmitter */}
          <ObjectModel
            path="/tower.obj"
            materialPath="/tower.mtl"
            position={[-8, -5, 0]}
            scale={0.7}
          />

          <TwoSidedArrow position={[0.6, -5, 0]} length={14.9} />
          <Html position={[0.6, -5, 0]} style={{ pointerEvents: "none" }}>
            <div
              style={{ color: "black", fontSize: "1em", textAlign: "center" }}
            >
              r
            </div>
          </Html>

          {/* Receiver */}
          <ObjectModel
            path="/reno.obj"
            materialPath="/reno.mtl"
            position={[8.5, 5, 0]}
            scale={0.005}
            rotation={[0, 0, 0]}
          />

          <Html position={[-10, 8, 0]} style={{ pointerEvents: "none" }}>
            <div
              style={{ color: "green", fontSize: "1em", textAlign: "center" }}
            >
              Transmitter
            </div>
          </Html>

          {wall1Visible && (
            <>
              <Html position={[-20, 8, 0]} style={{ pointerEvents: "none" }}>
                <div
                  style={{
                    color: "#CD7F32",
                    fontSize: "1em",
                    textAlign: "center",
                  }}
                >
                  Left Wall
                </div>
              </Html>
              <TwoSidedArrow position={[-14.3, -5, 0]} length={9.3} />
              <Html position={[-14.3, -5, 0]} style={{ pointerEvents: "none" }}>
                <div
                  style={{
                    color: "black",
                    fontSize: "1em",
                    textAlign: "center",
                  }}
                >
                  <p className="flex text-nowrap">d-r</p>
                </div>
              </Html>
            </>
          )}
          {wall2Visible && (
            <>
              <Html position={[20, 8, 0]} style={{ pointerEvents: "none" }}>
                <div
                  style={{
                    color: "#CD7F32",
                    fontSize: "1em",
                    textAlign: "center",
                  }}
                >
                  Right Wall
                </div>
              </Html>
              <TwoSidedArrow position={[13.7, -5, 0]} length={10.3} />
              <Html position={[13.7, -5, 0]} style={{ pointerEvents: "none" }}>
                <div
                  style={{
                    color: "black",
                    fontSize: "1em",
                    textAlign: "center",
                  }}
                >
                  <p className="flex text-nowrap">d-r</p>
                </div>
              </Html>
            </>
          )}

          {direction == "Left" ? (
            <LeftSidedArrow position={[8.5, 0, 0]} length={2.5} />
          ) : (
            <RightSidedArrow position={[8.5, 0, 0]} length={2.5} />
          )}

          <Html position={[7.5, 2, 0]} style={{ pointerEvents: "none" }}>
            <div
              style={{ color: "blue", fontSize: "1em", textAlign: "center" }}
              className="text-nowrap"
            >
              {velocity} m/s
            </div>
          </Html>

          <Html position={[8, 8, 0]} style={{ pointerEvents: "none" }}>
            <div
              style={{ color: "purple", fontSize: "1em", textAlign: "center" }}
            >
              Receiver
            </div>
          </Html>

          {/* Conditional rendering for walls */}
          {wall2Visible && (
            <>
              <Wall
                position={[20, 1, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 5, 0.5]}
                color="#964B00"
              />
            </>
          )}
          {wall1Visible && (
            <>
              <Wall
                position={[-20, 1, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 5, 0.5]}
                color="#964B00"
              />
            </>
          )}

          <Wall
            position={[0, -6, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[5, 30, 0.5]}
            color="#808080"
          />

          {/* Sine Wave */}
          {wall2Visible ? <SineWave /> : <SineWave3 />}
          <SineWave3 />
          {wall1Visible && (
            <>
              <SineWave2 />
              <SineWave2ref />
            </>
          )}
          {wall2Visible && <SineWaveRef />}

          <OrbitControls enableZoom minDistance={10} maxDistance={30} />
        </Canvas>
      </div>

      {/* Toggle Button */}
      <div
        style={{ position: "absolute", top: 20, left: 20 }}
        className="bg-gray-500 p-1 rounded-md shadow-md text-sm"
      >
        <div className="flex items-center gap-1 mb-1">
          <Switch onClick={toggleWall1} defaultChecked={true} />
          <p>Left wall</p>
        </div>
        <div className="flex gap-1 items-center">
          <Switch onClick={toggleWall2} defaultChecked={true} />
          <p>Right wall</p>
        </div>
      </div>

      <div className="bg-gray-500 p-1 rounded-md shadow-md font-semibold absolute top-5 left-[47.5%]">
        <div className="flex items-center gap-1">
          <p>Scene 1</p>
        </div>
      </div>

      <div className="absolute top-5 left-40 bg-gray-500 p-1 rounded-md flex flex-col gap-1 items-center">
        <Label className="text-black flex items-center">
          d:
          <Input
            type="number"
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
            className="ml-1 w-20 bg-gray-600 border-none rounded text-center"
          />
        </Label>
        <Label className="text-black flex items-center">
          r:
          <Input
            type="number"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="ml-1 w-20 bg-gray-600 border-none rounded text-center"
          />
        </Label>
        <p className="text-sm text-black">f = 900MHz</p>
      </div>

      <div className="absolute top-5 right-5 flex flex-col items-center p-1 border bg-gray-500 rounded-md w-48">
        <h2 className="text-sm mb-1">Receiver Velocity</h2>

        <Label className="text-black flex items-center">
          Velocity:
          <Input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            className="ml-1 w-20 bg-gray-600 border-none rounded text-center"
          />
        </Label>

        <div className="flex space-x-4 mt-2">
          <Button
            size={"sm"}
            onClick={() => toggleDirection("Left")}
            className={`px-3 py-1 rounded hover:bg-blue-600 ${
              direction === "Left"
                ? "bg-blue-500 text-black"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Left
          </Button>
          <Button
            size={"sm"}
            onClick={() => toggleDirection("Right")}
            className={`px-3 py-1 rounded hover:bg-blue-600 ${
              direction === "Right"
                ? "bg-blue-500 text-black"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Right
          </Button>
        </div>
      </div>

      <Drawer>
        <DrawerTrigger className="absolute bottom-5 left-[47%] border p-1 rounded-md bg-orange-400 text-black">
          Analyse
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-[90vh] overflow-y-scroll">
            {/* <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader> */}
            <Analysis
              iswall1visible={wall1Visible}
              iswall2visible={wall2Visible}
              velocity={velocity}
              direction={direction}
              d={d}
              r={r}
            />
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ThreeScene;
