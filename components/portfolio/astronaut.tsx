"use client";

import { useEffect, useMemo, useRef, type FC } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";
import { type AstronautProps } from "@/types/portfolio-types";
import { Box3, type Group, Vector3 } from "three";

const MODEL_URL = "/models/cyberpunk_laptop.glb";

export const Astronaut: FC<AstronautProps> = (props) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_URL);
  const model = useMemo(() => {
    const object = scene.clone(true);
    const bounds = new Box3().setFromObject(object);
    const size = bounds.getSize(new Vector3());
    const largestSide = Math.max(size.x, size.y, size.z);
    if (largestSide > 0) object.scale.setScalar(3 / largestSide);
    bounds.setFromObject(object);
    object.position.sub(bounds.getCenter(new Vector3()));
    return object;
  }, [scene]);

  const yPosition = useMotionValue(2);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) group.current.position.y = ySpring.get();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, -0.35, 0]}
      scale={(props.scale ?? 0.3) * 2}
      position={props.position ?? [1.3, -1, 0]}
    >
      <primitive object={model} />
    </group>
  );
};

useGLTF.preload(MODEL_URL);
