export interface Menu {
  code: string;
  text: string;
  order: number;
  icon: string;
  type: string;
  link: string;
  enable: boolean;
  module: string;
  displayed?: boolean;
  submenus: Menu[];
}

export interface ModuleDetails {
  code: string;
  text: string;
  order: number;
  icon: string;
  type: string;
  link: string;
  enable: boolean;
  module: string;
  segments: SegmentDTO[];
  functions: SegmentDTO[];
}

export interface SegmentDTO {
  code: string;
  enable: boolean;
  name: string;
  datafilter: string;
  module: string;
}
