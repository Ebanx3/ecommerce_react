import React from 'react'

const UploadAvatar = () => {



    return (
        <div className='containerFormSignup'>
            <h2 className='crearCuentaTitle'>Sube un avatar</h2>
            <form className='avatarForm' action='http://localhost:8080/api/setAvatar' method='POST' encType="multipart/form-data">
                <input type="file" name="avatar" id="avatar" accept='image/png, image/gif, image/jpeg' />
                <input className='loginBtn' type="submit" value="Subir avatar" />
            </form>
        </div>
    )
}

export default UploadAvatar