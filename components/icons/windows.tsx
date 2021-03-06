import React from 'react';

type IconProps = {
    width:  any,
    height: any,
    fill:   any,
}

const WindowsIcon = ({ fill, width = 32, height = 32 }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
        >
            <path d="M0 2.265l6.54-.887.002 6.287-6.536.037L0 2.265zM6.536 8.39l.005 6.293-6.535-.896v-5.44l6.53.043zm.792-7.13L15.998 0v7.585l-8.67.07V1.26zM16 8.45L15.998 16l-8.67-1.22-.012-6.345L16 8.45z"></path>
        
        </svg>
    )
    
}   

export default WindowsIcon