import React, { ComponentType } from 'react'

type UsesTech = {
  icon: ComponentType;
  text: string;
  id: string;
}

type TSkillsCard = {
  title: string;
  dec: string;
  usesTech: UsesTech[]
};

export type { TSkillsCard, UsesTech }