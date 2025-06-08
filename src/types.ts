export type User = {
    name: string,
    email: string
}

export type Project = {
    name : string,
    description: string,
    tech_stack: string[],
    owner: User,
    gihtub_link: string,
    demo_link?: string   
}